<template>
    <div class="home">
            <LoginCard/>
        
        <a href="/student">Student</a><br />
        <a href="/supervisor">supervisor</a><br />
        <a href="/hod">hod</a><br />
        <a href="/psd">psd</a><br />
        <a href="/asDean">Associate Dean</a><br />
    </div>
</template>

<script>
// @ is an alias to /src

import LoginCard from '../components/LoginCard'

export default {
    name: 'Home',
    components: {
        LoginCard
    }
}
</script>
