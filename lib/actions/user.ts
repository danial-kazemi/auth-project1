"use server"
const register = async (formData: FormData) => {
    try{

        const firstName = formData.get('firstName') as string;        
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        console.log(firstName,lastName, password, email);
        
    }catch{

    }
}

export {register};