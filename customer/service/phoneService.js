function PhoneService() {

  this.getPhones = () => {
    return axios({
      method: 'get',
      url: 'https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts',
    })
  }

  this.getPhoneById = (id) => {
    return axios({
      method: 'get',
      url: `https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts/${id}`,
    })
  }

}
