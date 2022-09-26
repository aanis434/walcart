/**
* @author Md Anisur Rahman
* @function Banner
**/

export const Banner = ({item}) => {
  return(
    <div className="cursor-pointer">
        <img src={item.src} alt="" width="100%" height="auto" />
    </div>
   )

 }