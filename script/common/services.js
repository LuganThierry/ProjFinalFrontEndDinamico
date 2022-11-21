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
    })
    return await response.json();
  }