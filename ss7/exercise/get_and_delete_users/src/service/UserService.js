import request from '../http-common/http_request';

const findAll = () => {
    return request.get('/users')
}

const remove = async (id) => {
    return request.delete(`/users/${id}`)
}

const userService = {
    findAll,
    remove
}

export default userService;