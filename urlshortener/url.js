const links=[]

const longurl= "http://www.nevaps.com/au/ok/redi/new_product=s9_inco?dr_rd=workgp\product\B07NKGK5L8\ref=s9_acsd_al_bw_c_x_1_w";
const shorturl= shortening()
links.push({longurl,shorturl})

// function to generate  short url
function shortening(){
    let data=''
    const letters= 'abcdefjhijklmnopqrstuvwxyz'
    for (let a=0;a<4;a++){
         data += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return data
}

// function to redirect to original url when given a short url
function generate(link){
    const result= links.find(url => url.shorturl=== link)
    if(result){
        console.log(result)
    }
    else{
        console.log('not fount !!')
    }
}

