<!DOCTYPE html>
<html>
    <head>
        <title>Return Biodata</title>
    </head>
    <body>
        <script type="text/javascript">
            let biodata =
            '[
                {
                "name" : "Faizal Nurohmat",
                "age" : 23,
                "address" : "Yogyakarta, Indonesia"
                "hobbies" : ["Sports","anime"]
                "is_married" : false,
                "list_school" : {"SMK N 1 Pundong_2012_2015_Teknik Komputer Jaringan"}
                "skills" : {
                    "Coding_beginner"
                    "Komputer_advanced"}
                "interest_in_coding" : true,
                }
            ]'

          console.log(JSON.parse(biodata))
        </script>
    </body>
</html>