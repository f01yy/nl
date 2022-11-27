import axios from 'axios';

export async function getCategories(cityId) {
  const response = await axios.get(
    'https://nlstar.com/ru/api/catalog3/v1/menutags/',
    {
      params: {
        city_id: cityId,
      },
    }
  );

  return response.data;
}

export async function getCities(term, country) {
  const response = await axios.get('https://nlstar.com/api/catalog3/v1/city/', {
    params: {
      term,
      country,
    },
  });

  return response.data.data;
}

export async function getProducts(cityId, category) {
  const response = await axios.get(
    `https://nlstar.com/ru/api/catalog3/v1/menutags/${category}/`,
    {
      params: {
        city_id: cityId,
      },
    }
  );

  return response.data.products;
}
