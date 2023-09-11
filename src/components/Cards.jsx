const Cards =({description, position, company, name, image})=>{

    return(
        <div className="w-fit border-2 bg-white border-[#b5838d] text-xl flex items-center flex-col gap-5">
            <div>
                <p>{description}</p>
            </div>
            <div>
                <p className="bg-[#b5838d] p-3 rounded-full ">Image</p>
                <div></div>
            </div>
        </div>
    )
}
export default Cards;