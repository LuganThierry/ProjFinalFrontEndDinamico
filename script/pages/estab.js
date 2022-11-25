window.Page.estabPage = async (eUid) => {
  main.innerHTML = "";

  const headerContent = ["Início", "Estabelecimentos", "Categorias", "Grupo"];
  const hdr = header.create(headerContent);
  main.appendChild(hdr);
  hdr.addEventListener("scroll", () => {});

  const section = document.createElement("section");
  section.classList.add('section-pages');
  main.appendChild(section);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tfoot = document.createElement("tfoot");

  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tfoot);

  section.appendChild(
    btn.create({
      content: "Cadastrar estabelecimento",
      onClick: () => {
        Page.estabRegister();
      },
      className: "btn-register",
    })
  );

  section.appendChild(table);

  const headerTable = [
    "Endereco",
    "Telefone",
    "Nome",
    "Categoria",
    "CEP",
    "Email",
    "Editar",
    "Deletar",
  ];

  headerTable.forEach((e) => {
    const th = document.createElement("th");
    th.textContent = e;
    thead.appendChild(th);
  });
  let companies = [];

  if (eUid != null) {
    companies = await getCompaniesByCategory(eUid);
  } else {
    companies = await getCompanies();
  }

  companies.forEach((company) => {
    const trObj = document.createElement("tr");
    Object.keys(company).forEach((key) => {
      if (key != "uid") {
        if (key == "category") {
          let tdAtributosObj = document.createElement("td");
          tdAtributosObj.innerText = company[key].name;
          trObj.appendChild(tdAtributosObj);
        } else {
          let tdAtributosObj = document.createElement("td");
          tdAtributosObj.innerText = company[key];
          trObj.appendChild(tdAtributosObj);
        }
      }
    });

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    const icon1 = document.createElement("img");
    const icon2 = document.createElement("img");
    icon1.setAttribute("src", "./img/edit.png");
    icon2.setAttribute("src", "./img/delete.png");

    icon1.addEventListener("click", () => {
      Page.estabEdit(company.uid);
    });

    icon2.addEventListener("click", () => {
      if (
        confirm("Essa ação não poderá ser revertida. Você tem certeza?") ===
        true
      ) {
        deleteCompany(company.uid);
        Page.estabPage();
      }
    });

    td1.appendChild(icon1);
    td2.appendChild(icon2);

    trObj.appendChild(td1);
    trObj.appendChild(td2);

    tbody.appendChild(trObj);
  });

  // tfoot.appendChild(
  //     btn.create({
  //         content: "Cadastrar estabelecimento",
  //         onClick: () => {
  //             Page.estabRegister();
  //         },
  //         className: 'btn-register'
  //     })
  // )

  const ftr = await footer.create();
  main.appendChild(ftr);
};
