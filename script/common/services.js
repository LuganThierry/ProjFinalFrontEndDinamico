const groupCode = "8859cc95-00f3-4720-a3ff-8b15a2a7ffd2";
const url = "http://estabelecimentos.letscode.dev.netuno.org:25390/services/";

async function getCategories() {
  const response = await fetch(`${url}category/list/`, {
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
  });

  return response.json();
}

async function postCategory({ id, name }) {
  const response = await fetch(`${url}category/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: id,
      name: name,
      group: {
        uid: groupCode,
      },
    }),
  });

  return await response.json();
}

async function editCategory({ uid, code, name }) {
  const response = await fetch(`${url}category`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: uid,
      code: code,
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

  return response.json();
}

async function deleteCategory(uid) {
  const response = await fetch(`${url}category?uid=${uid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
async function PostCompany({
  category,
  name,
  address,
  postal_code,
  phone,
  email,
}) {
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
        uid: category,
      },
      postal_code: postal_code,
      email: email,
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

async function GetCompaniesByCategory(categoryCode) {
  const response = await fetch(`${baseURL}establishment/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      category: {
        uid: categoryCode,
      },
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response) {
    errorHandler();
    return [];
  }

  return await response.json();
}

async function editCompany(obj) {
  console.log(obj);
  try {
    const response = await fetch(`${url}establishment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...obj,
        category: {
          uid: obj.category,
        },
        group: {
          uid: groupCode,
        },
      }),
    });
    if (!response.ok) {
      errorHandler(response);
      return [];
    }

    return response.json();
  } catch (error) {
    console.log("Erro na comunicação:", error);
  }
}

async function deleteCompany(uid) {
  try{
    const response = await fetch(`${url}/establishment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: uid,
      group: {
        uid: groupCode,
      },
    }),
  });
  if (!response.ok) {
    errorHandler(response);
    return [];
  }
    return response.json();
  } catch (error) {
    console.log("Erro na comunicação:", error);
  }
}

function errorHandler(response) {
  console.log("Erro : ", response.status, " - ", response.statusText);
}
