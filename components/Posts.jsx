import React from 'react'
import Post from './Post'

const DUMMY_DATA=[
    {
        id:'123',
        username:'velizardabov',
        userImg:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    img:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    caption:'This is Dope',
    },
    {
        id:'1234',
        username:'velizardabov',
        userImg:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    img:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    caption:'This is Dope',
    },
    {
        id:'1235',
        username:'velizardabov',
        userImg:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    img:'https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7',
    caption:'This is Dope',
    }
]
const Posts = () => {
  return (
    <div>
       {DUMMY_DATA.map((post) => (
        <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
       ))}
    </div>
  )
}

export default Posts