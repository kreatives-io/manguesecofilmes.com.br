interface IWorkDetailProps {
    
}

export default function WorkDetail(workDetails: IWorkDetailProps) {
    return (
        <div className="container mx-auto">
            <h1>WorkDetail</h1>
            <p>
                {JSON.stringify(workDetails)}
            </p>
        </div>
    )
}
