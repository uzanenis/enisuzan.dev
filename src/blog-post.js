export const getPosts =  () => {
    return [
        {
          title: "İyi bir mühendisin 10 özelliği",
          slug: "iyi-bir-muhendis",
          details: require("./posts/merhaba.md").default,
          date: "10 Eylül 2022",
        },
        {
          title: 'Ornek Yazi',
          slug: 'ornek-yazi',
          details: require("./posts/ornek-yazi.md").default,
          date: 'Tarih Eylül 2022'
        },
        {
          title: 'Test Baslik 3',
          slug: 'merhaba2',
          details: 'details3',
          date: 'Tarih3 Eylül 2022'
        }
      ];
}
