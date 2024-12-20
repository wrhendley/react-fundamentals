// Task 1: Create a Header Section
// Write a functional component named Header that includes a background image and you or a fictional character name overlaying the background image. 

const Header = () => {
    return (
        <div style={{ backgroundImage: "url('./src/assets/spring-green-fields-landscape.jpg')", height: 'auto', width: 'vmax', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src="./src/assets/20048-2-pikachu-hd.png" alt="Pikachu" style={{ height: '50vh' }}/>
        </div>
    )
}

export default Header;