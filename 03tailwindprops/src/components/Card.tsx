import React from 'react'

const Card = ({username ="HC" ,post="Not assigned yet", myArr=[23,32]}) => {
  // console.log(props)
  

  return (
    <div>
        
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/23196871/pexels-photo-23196871/free-photo-of-cafe.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum quo maiores pariatur perspiciatis inventore illo cupiditate consectetur, veritatis repellendus recusandae iste repellat nostrum non quia. Cum voluptatum ipsam aut!
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}, {myArr}
              </div>
            </figcaption>
          </div>
        </figure>
    </div>
  )
}

export default Card