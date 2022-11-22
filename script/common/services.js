const groupCode = '8859cc95-00f3-4720-a3ff-8b15a2a7ffd2';
const url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/';

async function getCategories() {
    const response = await fetch(`${url}category/list/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: '',
            group: {
                uid: groupCode
            },
        }),
    });

    return await response.json();
}


async function postCategory({id, name}) {
    const response = await fetch(`${url}category/`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: id,
            name: name,
            group: {
              uid: groupCode
            },
        }),
    })

    return await response.json();
}

async function editCategory(uid, id, name) {
    const response = await fetch(`${url}category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        code: id,
        name: name,
        group: {
          uid: groupCode,
        },
      }),
    }).catch((error) => {
        console.log("Erro na comunicação:", error);
      });
    
      if (!response.ok) {
        errorHandler(response);
        return [];
      }
    
    return await response.json();
  }

  async function DeleteCategories(uid) {
    const response = await fetch(`${url}category`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group: {
          uid: groupCode,
        },
        uid
      }),
    }).catch((error) => {
      console.log("Erro na comunicação:", error);
    });  
  
    if (!response.ok) {
      errorHandler(response);
      return [];
    }
  
    return await response.json();
  }

  async function getCompanies() {
    const response = await fetch(`${url}establishment/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        group: {
          uid: groupCode,
        },
      }),
    }).catch((error) => {
      console.log("Erro na comunicação:", error);
    });
  
    if (!response.ok) {
      errorHandler(response);
      return [];
    }
  
    return response.json();
  }

  //testar em outro momento, pois está dando erro 500 mesmo rodando no openAPI
  async function PostCompany({ category, name, address, postal_code, phone, email }) {

    const response = await fetch(`${url}establishment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        phone: phone,
        name: name,
        category: {
          uid: category
        },
        postal_code: postal_code,
        email: email,
        group: {
          uid: groupCode
        },
      }),
    }).catch((error) => {
      console.log("Erro na comunicação:", error);
    });
  
    if (!response.ok) {
      errorHandler(response);
      return [];
    }
  
    return await response.json();
  }

  function errorHandler(response) {
    console.log("Erro : ", response.status, " - ", response.statusText);
  }
  