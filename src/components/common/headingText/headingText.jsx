import "./headingText.scss"

const HeadingText = ({ children: text }) => {

    const data = text.trim().split(" ").map((item, index) => {
        if (index === 0) return <span
            key={index}
            className="heading">
            {item}
        </span>
        return item
    })

    return (
        <h2>{data}</h2>
    );
}

export default HeadingText;