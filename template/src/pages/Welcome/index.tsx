import {NotificationCenterPreview} from "@/ui/notice/develop.preview"
import {ColorPreview} from "@/ui/color/develop.preview"
import {ButtonPreview} from "@/ui/button/develop.preview"
import {ReduxStorePreview} from "@/store/develop.preview"
import {FontPreview} from "@/ui/font/develop.preview"
import {IconsPreview} from "@/ui/icons/develop.preview"

export const Welcome = () => {
    return <div>
        <div>welcome to use xie-react to create react + ts project, author is xiechanglei</div>
        <h1>0. Font</h1>
        <FontPreview/>
        <h1>1. Color plugin</h1>
        <ColorPreview/>
        <h1>2. Notice plugin</h1>
        <NotificationCenterPreview/>
        <h1>3. Button plugin</h1>
        <ButtonPreview/>
        <h1>4. Redux plugin</h1>
        <ReduxStorePreview/>
        <h1>5. Icon plugin</h1>
        <IconsPreview/>
    </div>
}

export default Welcome