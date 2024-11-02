import {useParams} from 'react-router-dom'

const ItemDetailsPage = () => {
    const {cardId} = useParams();

  return (
    <div>
    {cardId}</div>
  )
}

export default ItemDetailsPage