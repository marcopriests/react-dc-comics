const links = [

    {

      id: 1,

      href: "#",

      label: "Characters",

      current: false,

    },

    {

      id: 2,

      href: "#",

      label: "Comics",

      current: true,

    },

    {

      id: 3,

      href: "#",

      label: "Movies",

      current: false,

    },

    {

      id: 4,

      href: "#",

      label: "TV",

      current: false,

    },

    {

        id: 4,

        href: "#",

        label: "Games",

        current: false,

      },

      {

        id: 4,

        href: "#",

        label: "Collectibles",

        current: false,

      },

      {

        id: 4,

        href: "#",

        label: "Videos",

        current: false,

      },

      {

        id: 4,

        href: "#",

        label: "Fans",

        current: false,

      },

      {

        id: 4,

        href: "#",

        label: "News",

        current: false,

      },

      {

        id: 4,

        href: "#",

        label: "Shop",

        current: false,

      }

    ]

const Header = () => {
    const menuLink = links.map(link => {
        return <li><a href="">{link.label}</a></li>
    })

    return (
        <header className="container">

            <img src="./public/img/dc-logo.png" alt="" />

            <ul>
                {menuLink}
            </ul>
        </header>
    )
}

export default Header
