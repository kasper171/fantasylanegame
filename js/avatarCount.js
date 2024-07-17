fetch('https://api.minimania.app/api/avatarcount')
    .then(response => response.json())
    .then(data => {
        
        const avatarCount = data.value;

        document.getElementById('avatarCount').innerText = `${avatarCount}`;
    })
    .catch(error => {
        console.error('Erro ao obter os dados da API:', error);
    });
