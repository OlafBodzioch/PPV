var listaKupujacych = [];

        function pokaz(event)
        {
            const poleFormularz = document.getElementById("poleFormularz");
            const przycisk1 = document.getElementById("przycisk1");

            poleFormularz.style.display = "block";

            tekstGora = document.getElementById("tekstGora");
            tekstGora.innerHTML = "Dodaj klienta:";

            przycisk1.style.display = "none";

            poleDane = document.getElementById("poleDane");
            
            poleDane.innerHTML = "";

            przywrocDostep(event);
        }

        function zapisz(event)
        {
            event.preventDefault()

            let newCustomer = new customer();
            
            newCustomer.nazwaFirmy = document.getElementById("nazwaFirmy").value;
            newCustomer.nip= document.getElementById("nip").value;
            newCustomer.miasto= document.getElementById("miasto").value;
            newCustomer.ulica= document.getElementById("ulica").value;
            newCustomer.nrDomu= document.getElementById("nrDomu").value;
            newCustomer.nrMieszkania= document.getElementById("nrMieszkania").value;
            newCustomer.kodPocztowy= document.getElementById("kodPocztowy").value;
            newCustomer.uwagi= document.getElementById("uwagi").value;
            newCustomer.branza= document.getElementById("branza").value;
            newCustomer.aktywny= document.getElementById("aktywny").checked;

            console.log(newCustomer);

            const poleFormularz = document.getElementById("poleFormularz");
            const przycisk1 = document.getElementById("przycisk1");

            poleFormularz.style.display = "none";
            przycisk1.style.display = "block";

            tekstGora = document.getElementById("tekstGora");
            tekstGora.innerHTML = "Lista klientów:";

            listaKupujacych.push(newCustomer);

            poleDane = document.getElementById("poleDane");
            
            for(let i=0; i < listaKupujacych.length;  i++)
            {
                poleDane.innerHTML += `<li>${listaKupujacych[i].getData()+', '+listaKupujacych[i].getAddress()}</li>`
            }

        }

        function wstaw(event)
        {
            event.preventDefault()

            document.getElementById("nazwaFirmy").value="Firma33";
            document.getElementById("nip").value=1111111111111111;
            document.getElementById("miasto").value="Firmiasto";
            document.getElementById("ulica").value="Firmowa";
            document.getElementById("nrDomu").value=33;
            document.getElementById("kodPocztowy").value="33-333";
            document.getElementById("uwagi").value="brak";
            document.getElementById("branza").value="Cement";
            document.getElementById("aktywny").checked=true;

            zablokujDostep(event);
        }

        function zmien(event)
        {

            const obiekt = {
            nazwaFirmy: document.getElementById("nazwaFirmy").value,
            nip: document.getElementById("nip").value,
            miasto: document.getElementById("miasto").value,
            ulica: document.getElementById("ulica").value,
            nrDomu: document.getElementById("nrDomu").value,
            nrMieszkania: document.getElementById("nrMieszkania").value,
            kodPocztowy: document.getElementById("kodPocztowy").value,
            uwagi: document.getElementById("uwagi").value,
            branza: document.getElementById("branza").value,
            aktywny: document.getElementById("aktywny").checked
            };

            let szukaj = listaKupujacych.find(obiekt);

            wyzeruj(event);

            const obiekt2 = {
            nazwaFirmy: document.getElementById("nazwaFirmy").value,
            nip: document.getElementById("nip").value,
            miasto: document.getElementById("miasto").value,
            ulica: document.getElementById("ulica").value,
            nrDomu: document.getElementById("nrDomu").value,
            nrMieszkania: document.getElementById("nrMieszkania").value,
            kodPocztowy: document.getElementById("kodPocztowy").value,
            uwagi: document.getElementById("uwagi").value,
            branza: document.getElementById("branza").value,
            aktywny: document.getElementById("aktywny").checked
            };

            szukaj = obiekt2;

        }

        function przywrocDostep(event)
        {
            event.preventDefault()

            document.getElementById("nazwaFirmy").disabled=false;
            document.getElementById("nip").disabled=false;
            document.getElementById("miasto").disabled=false;
            document.getElementById("ulica").disabled=false;
            document.getElementById("nrDomu").disabled=false;
            document.getElementById("kodPocztowy").disabled=false;
            document.getElementById("uwagi").disabled=false;
            document.getElementById("branza").disabled=false;
            document.getElementById("aktywny").disabled=false;
        }

        function zablokujDostep(event)
        {
            event.preventDefault()

            document.getElementById("nazwaFirmy").disabled=true;
            document.getElementById("nip").disabled=true;
            document.getElementById("miasto").disabled=true;
            document.getElementById("ulica").disabled=true;
            document.getElementById("nrDomu").disabled=true;
            document.getElementById("kodPocztowy").disabled=true;
            document.getElementById("uwagi").disabled=true;
            document.getElementById("branza").disabled=true;
            document.getElementById("aktywny").disabled=true;
        }

        function wyzeruj(event)
        {
            document.getElementById("nazwaFirmy").value=undefined;
            document.getElementById("nip").value=undefined;
            document.getElementById("miasto").value=undefined;
            document.getElementById("ulica").value=undefined;
            document.getElementById("nrDomu").value=undefined;
            document.getElementById("kodPocztowy").value=undefined;
            document.getElementById("uwagi").value=undefined;
            document.getElementById("branza").value=undefined;
            document.getElementById("aktywny").checked=false;
        }
