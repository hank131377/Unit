export default function RootLayout({children,header,menu}: {children: React.ReactNode,header:React.ReactNode,menu:React.ReactNode}) {
  return (
  <>
    <div style={{background:"yellow"}}>{header}</div>
    <div style={{display:"flex"}}>
        <div style={{width:"50%",background:"red"}}>
            {children}
        </div>
        <div style={{width:"50%",background:"blue"}}>
            {menu}
        </div>
    </div>
    </>
  )
}
