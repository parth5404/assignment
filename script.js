
        
        const countryData = {
            "status": "success",
            "data": [
                {"id": 3, "name": "Albania"},
                {"id": 48, "name": "Colombia"},
                {"id": 101, "name": "India"},
                {"id": 208, "name": "Sri Lanka"}
            ]
        };

        const stateData = {
            "status": "success",
            "data": [
                {"id": 603, "name": "Berat County", "country_id": 3}
            ]
        };

        

      
        const countryDropdown = document.getElementById('countryDropdown');
        countryData.data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.id;
            option.text = country.name;
            countryDropdown.appendChild(option);
        });

        
        function populateStates() {
            const countryId = countryDropdown.value;
            const stateDropdown = document.getElementById('stateDropdown');
            stateDropdown.innerHTML = '<option value="">Select State</option>';

            if (countryId) {
                const states = stateData.data.filter(state => state.country_id == countryId);
                states.forEach(state => {
                    const option = document.createElement('option');
                    option.value = state.id;
                    option.text = state.name;
                    stateDropdown.appendChild(option);
                });
            }
        }

      
        function populateCities() {
            const stateId = stateDropdown.value;
            const cityDropdown = document.getElementById('cityDropdown');
            cityDropdown.innerHTML = '<option value="">Select City</option>';

            if (stateId) {
                const cities = cityData.data.filter(city => city.state_id == stateId);
                cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id;
                    option.text = city.name;
                    cityDropdown.appendChild(option);
                });
            }
        }
    
