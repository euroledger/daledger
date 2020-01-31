const StyleData = (indoors, translations) => {

    const dataIndoors = [
        {
            image: "/styles/indoor/mediterranean.jpg",
            title: translations.projectStyleIndoor[0].title,
            description: translations.projectStyleIndoor[0].description
        },
        {
            image: "/styles/indoor/traditional.jpg",
            title: translations.projectStyleIndoor[1].title,
            description: translations.projectStyleIndoor[1].description
        },
        {
            image: "/styles/indoor/urban.jpg",
            title: translations.projectStyleIndoor[2].title,
            description: translations.projectStyleIndoor[2].description
        },
        {
            image: "/styles/indoor/contemporary.jpg",
            title: translations.projectStyleIndoor[3].title,
            description: translations.projectStyleIndoor[3].description
        },
        {
            image: "/styles/indoor/minimalist.jpg",
            title: translations.projectStyleIndoor[4].title,
            description: translations.projectStyleIndoor[4].description
        },
        {
            image: "/styles/indoor/industrial.jpg",
            title: translations.projectStyleIndoor[5].title,
            description: translations.projectStyleIndoor[5].description
        },
        {
            image: "/styles/indoor/midcentury.jpg",
            title: translations.projectStyleIndoor[6].title,
            description: translations.projectStyleIndoor[6].description
        },
        {
            image: "/styles/indoor/bohemian.jpg",
            title: translations.projectStyleIndoor[7].title,
            description: translations.projectStyleIndoor[7].description
        },
        {
            image: "/styles/indoor/french.jpg",
            title: translations.projectStyleIndoor[8].title,
            description: translations.projectStyleIndoor[8].description
        },
        {
            image: "/styles/indoor/british.jpg",
            title: translations.projectStyleIndoor[9].title,
            description: translations.projectStyleIndoor[9].description
        },
        {
            image: "/styles/indoor/eclectic.jpg",
            title: translations.projectStyleIndoor[10].title,
            description: translations.projectStyleIndoor[10].description
        },
        {
            image: "/styles/indoor/shabby.jpg",
            title: translations.projectStyleIndoor[11].title,
            description: translations.projectStyleIndoor[11].description
        }
    ];

    const dataOutdoors = [
        {
            image: "/styles/outdoor/classic.jpg",
            title: translations.projectStyleOutdoor[0].title,
            description: translations.projectStyleOutdoor[0].description
        },
        {
            image: "/styles/outdoor/modern.jpg",
            title: translations.projectStyleOutdoor[1].title,
            description: translations.projectStyleOutdoor[1].description
        },
        {
            image: "/styles/outdoor/minimalist.jpg",
            title: translations.projectStyleOutdoor[2].title,
            description: translations.projectStyleOutdoor[2].description
        },
        {
            image: "/styles/outdoor/industrial.jpg",
            title: translations.projectStyleOutdoor[3].title,
            description: translations.projectStyleOutdoor[3].description
        },
        {
            image: "/styles/outdoor/flexible.jpg",
            title: translations.projectStyleOutdoor[4].title,
            description: translations.projectStyleOutdoor[4].description
        },
        {
            image: "/styles/outdoor/collaborative.jpg",
            title: translations.projectStyleOutdoor[5].title,
            description: translations.projectStyleOutdoor[5].description
        },
        {
            image: "/styles/outdoor/biophilic.jpg",
            title: translations.projectStyleOutdoor[6].title,
            description: translations.projectStyleOutdoor[6].description
        },
        {
            image: "/styles/outdoor/french.jpg",
            title: translations.projectStyleOutdoor[7].title,
            description: translations.projectStyleOutdoor[7].description
        },
        {
            image: "/styles/outdoor/asian.jpg",
            title: translations.projectStyleOutdoor[8].title,
            description: translations.projectStyleOutdoor[8].description
        },
        {
            image: "/styles/outdoor/comfortable.jpg",
            title: translations.projectStyleOutdoor[9].title,
            description: translations.projectStyleOutdoor[9].description
        },
        {
            image: "/styles/outdoor/future.jpg",
            title: translations.projectStyleOutdoor[10].title,
            description: translations.projectStyleOutdoor[10].description
        },
        {
            image: "/styles/outdoor/green.jpg",
            title: translations.projectStyleOutdoor[11].title,
            description: translations.projectStyleOutdoor[11].description
        }
    ];
    return {
        data: indoors ? dataIndoors : dataOutdoors
    }
}

export default StyleData;