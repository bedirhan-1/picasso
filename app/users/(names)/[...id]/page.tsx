interface Pageprops {
    params: {
        id: string;
    }
}

const page: React.FC<Pageprops> = ({ params }) => {
    return (
        <div>
            <h1>Page</h1>
            <p>{params.id}</p>
        </div>

    )
}

export default page;
