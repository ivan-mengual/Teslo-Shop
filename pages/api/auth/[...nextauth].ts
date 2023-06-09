import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { dbUsers } from "@/database"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here

    Credentials({
      name:'Custom Login',
      credentials:{
        email:{label:'Correo', type:'email', placeholder:'correo@google.com'},
        password:{label:'Contraseña', type:'password', placeholder:'Contraseña'},
      },
      async authorize(credentials){
        console.log('credentials authorize:',{credentials})

        const user = await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password)
        console.log('credentials user: ', user)
        return user
      }
    })
  ],

  //custom pages
  pages:{
    signIn:'/auth/login',
    newUser:'/auth/register',
  },

  //Callbacks
  jwt:{
    
  },
  session:{
    maxAge:2592000,
    strategy:'jwt',
    updateAge:86400
  },

  callbacks:{
    async jwt({token, account, user}){

      if (account){
        token.accessToken = account.access_token
        switch(account.type){
          case 'oauth':
            token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' )
          break

          case 'credentials':
          token.user = user
          break
        }
      }

      return token
    },
    async session({session, token, user}){
      console.log('Auth.session: ', session, token)
      session.accessToken = token.accessToken
      session.user = token.user as any

      return session
    }
  }
}

export default NextAuth(authOptions)