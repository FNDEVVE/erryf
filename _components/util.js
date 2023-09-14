export function getMonthName(month) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month];
}

export async function getAuthors() {
  const response = await fetch(
    'https://strapi-production-c322.up.railway.app/api/users?populate=*',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getFeaturedPost() {
  const response = await fetch(
    'https://strapi-production-c322.up.railway.app/api/articles?pagination[limit]=1&populate=*',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getPosts() {
  const response = await fetch(
    'https://strapi-production-c322.up.railway.app/api/articles?populate=*',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getPodcasts() {
  const response = await fetch(
    'https://strapi-production-c322.up.railway.app/api/podcasts?populate=*',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getAuthor({ username }) {
  const response = await fetch(
    `https://strapi-production-c322.up.railway.app/api/users?filters[username][$eq]=${username}&populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getPost({ url }) {
  const response = await fetch(
    `https://strapi-production-c322.up.railway.app/api/articles?filters[url][$eq]=${url}&populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getPodcast({ url }) {
  const response = await fetch(
    `https://strapi-production-c322.up.railway.app/api/podcasts?filters[url][$eq]=${url}&populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getArticlesOf({ username }) {
  const response = await fetch(
    `https://strapi-production-c322.up.railway.app/api/articles?filters[users_permissions_user][username][$eq]=${username}&populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
}
