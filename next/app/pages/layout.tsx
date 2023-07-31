import NavLink from "../components/NavLink"

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
  <div>
    <NavLink/>
    {children}
  </div>
   
  )
}
