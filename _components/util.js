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
  const response = await fetch('http://127.0.0.1:1337/api/users?populate=*', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function getFeaturedPost() {
  const response = await fetch(
    'http://127.0.0.1:1337/api/articles/1?populate=*',
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
    'http://127.0.0.1:1337/api/articles?populate=*',
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
    'http://127.0.0.1:1337/api/podcasts?populate=*',
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
    `http://127.0.0.1:1337/api/users?filters[username][$eq]=${username}&populate=*`,
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
    `http://127.0.0.1:1337/api/articles?filters[url][$eq]=${url}&populate=*`,
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
    `http://127.0.0.1:1337/api/articles?filters[users_permissions_user][username][$eq]=${username}&populate=*`,
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
