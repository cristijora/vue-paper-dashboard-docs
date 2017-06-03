export default {
    name: 'stats-card',
    render () {
        return (
            <div class="card">
                <div class="row">
                    <div class="col-xs-5">
                        { this.$slots.header }
                    </div>
                    <div class="col-xs-7">
                        { this.$slots.content }
                    </div>
                </div>
                <div class="footer">
                    <hr/>
                    { this.$slots.footer }
                </div>

            </div>
        )
    }
}