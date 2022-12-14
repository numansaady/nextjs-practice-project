import headerStyles from '../styles/Header.module.css';
const Header = () => {
    // const x = 2;
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Tech</span> News</h1>
            {/* <style jsx>
                {`
                 .title{
                   color: ${x < 3 ? "red" : "blue"}
                 }
                `}
            </style> */}
            <p className={headerStyles.description}>Keep up to date with Tech News</p>
        </div>
    );
};

export default Header;