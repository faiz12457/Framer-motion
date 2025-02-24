import React from 'react'

function TextParallex() {
  return (
    <div className='bg-white'>
    
    <TextContent imgUrl='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGFib3JhdGV8ZW58MHx8MHx8fDA%3D'
     heading='Collaborate'
     subHeading='Bulit for all of us'
      ></TextContent>

    <TextContent imgUrl='https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D'
     heading='Quality'
     subHeading='Never Compromise' 
    ></TextContent>
    <TextContent imgUrl='https://plus.unsplash.com/premium_photo-1681487675360-e4125238d519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJufGVufDB8fDB8fHww'
     heading='Modern'
     subHeading='Dress for the best'
     ></TextContent>

   
    
     </div>
  )
}

export default TextParallex



function TextContent({imgUrl ,heading,subHeading,children}){
    return(
        <>
        <div>
        <div>            
            <StickyImg imgUrl={imgUrl}  />
             </div>
            {children}
        </div>
        </>
    )
}



function StickyImg({imgUrl}){

    return (
        <div style={{
            
            background:`url(${imgUrl})` ,
            backgroundSize:'cover',
            backgroundPosition:'center',
        }}>
            <div />
        </div>
    )
}