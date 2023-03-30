export class Service {
    getPhones = async () => {
      try {
        const res = await axios({
          url: 'https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts',
          method: 'GET',
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getPhoneById = async (id) => {
      try {
        const res = await axios({
          url: `https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts/${id}`,
          method: 'GET',
        });
  
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  }
  