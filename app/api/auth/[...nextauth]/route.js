import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        try {
          const { email, password, userData } = credentials;

          // Parse userData as an array of user objects
          const users = JSON.parse(userData);

          console.log("Parsed User Data:", users);

          // Find the user whose email and password match
          const user = users.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            console.log("Authentication successful for:", user.email);
            return { id: user.id, email: user.email }; // Return user data
          } else {
            console.log("Invalid credentials");
            return null; // Authentication failed
          }
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null; // Return null if any error occurs
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the JWT token if available
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token data to the session
      session.user = {
        id: token.id,
        email: token.email,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure a secret is set in the environment variables
});

export { handler as GET, handler as POST };
