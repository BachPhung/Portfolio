export default function valadateInfo(values){
    let errors = {}
    if(!values.name.trim()){
        errors.name = "Name required"
    }
    if(!values.comment.trim()){
        errors.comment = "Comment required"
    }
    else if (values.comment.length < 10){
        errors.comment = "Comment's too short (NO LESS THAN 10 CHARACTERS)"
    }
    if (!values.email) {
        errors.email = 'Email required';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    return errors
}