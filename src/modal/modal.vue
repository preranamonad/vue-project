<template>
    <div>


        <b-modal id="modal-xl" size="xl" :modal-class="myclass"><div class="container pt-5">
            <h1>Select a Resources</h1>

            <b-row>
                <b-col cols="8">
                    <b-row>
                        <b-col cols="6">
                            <input type="text" placeholder="Search" name="search" class="text-search">
                        </b-col>
                        <b-col cols="3" class="pt-1 text-center Resources"><a href="">My Resources</a></b-col>
                        <b-col cols="3" class="pt-1 bg-light text-center Favorites"><a href="">My Favorites</a>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="4">
                    <b-row>
                        <b-col cols="12">
                            <b-button class="select">Select</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <div class="my-5">
                <p class="type-text">Type
                    <span ><i class="fa fa-angle-down "></i></span>
                </p>
            </div>

            <b-row>
                <b-col cols="3">
                    <div class="fake-add-resource-section text-center">

                        <p class="square"><i class="fa fa-plus-square"></i></p>
                        <p class="text-square">ADD NEW RESOURCES</p>

                    </div>
                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>
                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>

                <b-col cols="3" class="mb-5 image-section">
                    <div class='image-text'>RESOURCES</div>
                    <b-img src="src/assets/img.jpg" fluid alt="Fluid image"></b-img>

                    <div class="info">
                        <p class="pl-4 pt-3 add-title">Hematopoiesis</p>
                        <p class="pl-4 pb-3 "><a href="" class="add-desc">Khan Academy</a></p>
                    </div>

                </b-col>
            </b-row>


            <div class="text-xs-center">
                <v-pagination
                        v-model="page"
                        :length="15"
                        :total-visible="7"
                        prev-icon="fa fa-angle-left"
                        next-icon="fa fa-angle-right"
                        :class="'page-link-item'"

                ></v-pagination>
            </div>

        </div></b-modal>
    </div>
</template>

<script>



    export default {
        data() {
            return {
                page: 1,
                myclass: ['myclass']
            }
        },
        components: {

        }
    }

</script>

<style>


    .container
    {
        background-color: black;
    }


    .myclass .modal-content
    {
        background-color: black;
        width: 1850px;
        margin-left:-350px;
        margin-top: -45px;

    }

    .myclass .modal-title
    {
        visibility: hidden;
    }


    .myclass .modal-footer
    {
        visibility: hidden;
    }

    .myclass .modal-header
    {
        border-bottom: 0px;
    }

    .myclass .close
    {
        color: #dfdfdf;
        font-size: 35px;
    }

    .page-link-item .v-pagination__item
    {
        margin-left: 10px;
    }


    .page-link-item .v-pagination__item--active {
        background: #5b7f01 !important;
        color: #fff !important;
    }

    .page-link-item .v-pagination__navigation
    {
        height: 2.5rem;
        width: 2.5rem;
    }


    .page-link-item .v-pagination__more {
        background: #fff;
        color: #000;
        width: auto;
        min-height: 34px;
        min-width: 34px;
        padding: 0 5px;
        border-radius: 4px;
        margin-left: 10px;
    }



    h1 {
        color: #ffffff;
        margin-left: -10px;
        margin-bottom: 50px;

    }

    .text-search {
        background-color: #141414;
        border-radius: 5px;
        margin-left: -5px;
        border: 0px;
        width: 300px;
        height: 40px;
        color: #ffffff;
        padding-left: 20px;
    }

    ::placeholder {
        color: #ffffff;
        margin-left: -10px;

    }

    .Resources {
        background-color: #4a5725;
        border-color: #4a5725;
        margin-left: -40px;
        border-radius: 3px;
        width: 200px;
        font-size: 20px;

    }

    .Resources a {
        color: #ffffff;
        text-decoration: none;

    }

    .select {
        background-color: #004e54;
        border-color: #004e54;
        border-radius: 5px;
        color: #757e7f;
        width: 120px;
        height: 40px;
        font-size: 20px;
        margin-left: 235px;

    }

    .Favorites {
        color: #8d8d8d;
        border-radius: 3px;
        margin-left: 40px;
        font-size: 20px;

    }

    .Favorites a {
        color: #8d8d8d;

        text-decoration: none;
    }

    .type-text
    {
        color:white;
        font-size:20px;
    }

    .fa-angle-down
    {
        margin-left: 10px;
    }


    .fake-add-resource-section {
        background-color: #dfdfdf;
        height: 345px;
        padding: 20%;
    }

    .square {
        font-size: 60px;
        padding-top: 50px;
        color: #BBBBBB;

    }

    .text-square {
        color: #919191;
        font-size: 20px;
    }

    .info {
        background-color: white;
        color: black;
        line-height: 0.9;

    }

    .add-title {
        color: #363636;
        font-size: 20px;
    }

    .add-desc {
        color: #006c75;
        font-size: 15px;

    }

    .image-text {

        width: 110px;
        margin-left: 152px;
        position: absolute;
        background-color: #7a932f;
        padding-left: 12px;
        color: white;
    }

    .image-section {
        border-radius: 5px;

    }

</style>

