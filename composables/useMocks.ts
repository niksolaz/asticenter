
export const useMocks = () => {
  return {
    mockBusinesses: [
      {
        id: 1,
        title: "Trattoria del Centro",
        description: "Cucina tradizionale piemontese nel cuore della città. Lorem ipsum dolor sit amet si dolor maximus gravida est potenti nec sodales sem vulputate nam vestibulum sed diam curabitur neque odio mattis elit finibus feugiat sagittis at metus inceptos nostra id enim nulla ullamcorper sollicitudin elementum interdum hac rhoncus blandit taciti nisi curae fames et mus dapibus pharetra libero per habitant class viverra tellus congue cras cubilia vitae dignissim conubia quis turpis pretium natoque mi suscipit tristique efficitur dui laoreet lacinia fringilla aptent montes iaculis litora netus ante non torquent tincidunt sit penatibus letius arcu convallis ad malesuada tortor dis scelerisque eros cursus magna aenean consectetuer primis accumsan",
        category: "Ristorazione",
        info: "Aperto dal Lun-Sab 12-15, 19-23",
        priceRange: "€€",
        images: ["https://images.unsplash.com/photo-1785370145077-1a43b8d21873?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        items: [
          { name: "Tajarin al Tartufo", price: 18, image: "https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk" }, 
          { name: "Vino Locale", price: 8, image: "https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk" }
        ]
      },
      {
        id: 2,
        title: "Bottega dell'Artigiano",
        description: "Prodotti in pelle fatti a mano e accessori unici. Lorem ipsum dolor sit amet si dolor maximus gravida est potenti nec sodales sem vulputate nam vestibulum sed diam curabitur neque odio mattis elit finibus feugiat sagittis at metus inceptos nostra id enim nulla ullamcorper sollicitudin elementum interdum hac rhoncus blandit taciti nisi curae fames et mus dapibus pharetra libero per habitant class viverra tellus congue cras cubilia vitae dignissim conubia quis turpis pretium natoque mi suscipit tristique efficitur dui laoreet lacinia fringilla aptent montes iaculis litora netus ante non torquent tincidunt sit penatibus letius arcu convallis ad malesuada tortor dis scelerisque eros cursus magna aenean consectetuer primis accumsan",
        category: "Shopping",
        info: "Aperto tutti i giorni 09-20",
        priceRange: "€€€",
        images: ["https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        items: [
          { name: "Portafoglio Cuoio", price: 45, image: "https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk" }
        ]
      },
      {
        id: 3,
        title: "Galleria d'Arte Moderna",
        description: "Esposizioni temporanee di artisti emergenti. Lorem ipsum dolor sit amet si dolor maximus gravida est potenti nec sodales sem vulputate nam vestibulum sed diam curabitur neque odio mattis elit finibus feugiat sagittis at metus inceptos nostra id enim nulla ullamcorper sollicitudin elementum interdum hac rhoncus blandit taciti nisi curae fames et mus dapibus pharetra libero per habitant class viverra tellus congue cras cubilia vitae dignissim conubia quis turpis pretium natoque mi suscipit tristique efficitur dui laoreet lacinia fringilla aptent montes iaculis litora netus ante non torquent tincidunt sit penatibus letius arcu convallis ad malesuada tortor dis scelerisque eros cursus magna aenean consectetuer primis accumsan",
        category: "Eventi",
        info: "Mar-Dom 10-18",
        priceRange: "€",
        images: ["https://images.unsplash.com/photo-1615414047026-802692414b79?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        items: [
          { name: "Esposizione temporanea di artisti emergenti", price: 40, image: "https://imgs.search.brave.com/4rbgd1I8Px2JUrLa9drf8iBEI3JiHcY2dY86egt926g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvaXQvNi82Ny9B/c3RpLUdvbmZhbG9u/ZS5wbmc_dXRtX3Nv/dXJjZT1pdC53aWtp/cGVkaWEub3JnJnV0/bV9jYW1wYWlnbj1w/YXJzZXImdXRtX2Nv/bnRlbnQ9dGh1bWJu/YWlsX3Vuc2NhbGVk" }
        ]
      }
    ]
  }
}
