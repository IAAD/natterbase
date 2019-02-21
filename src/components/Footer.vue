<template>
    <div class="footer_container">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h4 class="title">PAYSMOSMO</h4>
                        <p class="footer_subtitle">Help give out inventory Loans to cooperative members with ease</p>

                    </div>
                    <div class="col-sm-2">
                        <h4 class="title2">Contact</h4>

                        <p><a href="#"> Registration</a></p>
                        <p><a href="#"> About Us</a></p>
                        <p><a href="#"> Contact Us</a></p>

                    </div>
                    <div class="col-sm-2">
                        <h4 class="title2">Contact</h4>

                        <p><a href="#"> Registration</a></p>
                        <p><a href="#"> About Us</a></p>
                        <p><a href="#"> Contact Us</a></p>

                    </div>
                    <div class="col-sm-3">
                        <h4 class="title2">Stay Connected</h4>
                        <font-awesome-layers class="fa-2x" full-width>
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" pull="left" />
                            <font-awesome-layers-text  transform="down-2 shrink-8" value="7" />
                        </font-awesome-layers>
                        <font-awesome-layers class="fa-2x" full-width>
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"  pull="left"  />
                            <font-awesome-layers-text  transform="down-2 shrink-9" value="9" />
                        </font-awesome-layers>
                        <font-awesome-layers class="fa-2x" full-width>
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"  pull="left"  />
                            <font-awesome-layers-text transform="down-2 shrink-8" value="5" />
                        </font-awesome-layers>

                    </div>
                    <div class="col-sm-2">
                        <h4 class="title2">Back to top ^</h4>
                    </div>
                </div>

            </div>


        </footer>
        <div class="text-center footer_down">
            <p class="footer_at"> <a href=""> © 2018 PAYSMOSMO </a> </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>