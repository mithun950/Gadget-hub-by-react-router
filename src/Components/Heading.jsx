const Heading = ({title,subTitle}) => {
    return (
        <div>
            <h1 className="text-center text-4xl mt-8 ">{title}</h1>
            <p className="text-center mt-3">{subTitle}</p>
        </div>
    );
};

export default Heading;