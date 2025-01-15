
import * as Locale from '../../locales';

const FormattedMessage = ({id}) => {
    const transalated_txt = Locale.en[id]

    return <span>{transalated_txt}</span>
}

export default FormattedMessage;