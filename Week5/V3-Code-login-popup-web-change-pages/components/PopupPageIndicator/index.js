export default function PopupPageIndicator({
    num = 1,
    total = 4
}) {
    return(
        <div>
            {num}/{total}
        </div>
    )
}