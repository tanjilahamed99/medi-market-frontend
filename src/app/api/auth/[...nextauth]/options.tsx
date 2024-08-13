import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { BASE_URL } from "@/utils/url";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials || {};
        if (!email || !password) {
          return null;
        }

        try {
          const response = await axios.post(`${BASE_URL}/auth/authorize-user`, {
            email,
            password,
          });

          const { status, data: user } = response.data;

          if (!status) {
            return null; // Handle backend errors
          }

          return {
            id: user?._id?.toString(),
            email: user?.email,
            name: user?.name,
            image: user?.image,
            provider: "credentials",
          };
        } catch (error) {
          console.error("Error in authorization:", error);
          return null; // Handle API request errors
        }
      },
    }),
  ],
  secret: "secret-top",
  callbacks: {
    async signIn({ user, account }: any) {
      if (["google", "facebook"].includes(account.provider)) {
        try {
          const response = await axios.post(`${BASE_URL}/auth/register`, {
            name: user?.name,
            email: user?.email,
            provider: account?.provider,
            role: "user",
            socialId: user?.id,
          });

          const newUser = response?.data?.data;
          user._id = newUser?._id?.toString();
          user.email = newUser?.email;
          user.name = newUser?.name;
          user.socialId = newUser?.socialId;
          user.status = newUser?.status;
          user.role = newUser?.role;
          user.provider = newUser?.provider;

          return true;
        } catch (error) {
          console.error("Error in social sign-in:", error?.message);
          return false;
        }
      }

      return true;
    },
    async redirect({ url, baseUrl }: any) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }: any) {
      session.user = token?.user;
      return session;
    },
    async jwt({ token, user, account }: any) {
      if (account?.provider === "credentials") {
        const provider = "email/pass";
        try {
          const response = await axios.get(
            BASE_URL +
              `/user/data?email=${user?.email}&provider=${provider}&socialId=${token?.sub}`
          );

          token.user = response.data;
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        if (user) {
          token.user = {
            _id: user._id,
            email: user.email,
            name: user.name,
            provider: user.provider,
            socialId: user.socialId,
            status: user.status,
            role: user.role,
          };
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};
