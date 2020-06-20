import { Injectable } from "@angular/core";
import { Peli } from "./peli.interface";

@Injectable({
    providedIn: "root"
})
export class PelisService {
    private items = new Array<Peli>
    (
        {
            title: "Fantastic Beasts 2", 
            imageSrc: "https://vignette.wikia.nocookie.net/es.harrypotter/images/7/7b/Animales_fant%C3%A1sticos_Los_cr%C3%ADmenes_de_Grindelwald.jpg/revision/latest?cb=20181116085406", 
            rating: "8.1", 
            duration: "2h 14m", 
            descriptions: ["Adventure", "Fantasy", "M12"], 
            cast: [
                { 
                    imgSrc: "~/assets/fb21.png", 
                    name: "Johnny Depp", 
                    role: "Grindelwald" 
                }, 
                { 
                    imgSrc: "~/assets/fb22.png", 
                    name: "Eddie Redmayne", 
                    role: "Newt Scamander" 
                },
                { 
                    imgSrc: "~/assets/fb23.png", 
                    name: "Jude Law", 
                    role: "Dumbledore" 
                }], 
            bookmark: false, 
            trailer: 'https://firebasestorage.googleapis.com/v0/b/uplabs-nativescript.appspot.com/o/FANTASTIC%20BEASTS%202%20Trailer%202%20(2018).mp4?alt=media&token=3dfe6dd0-b8b4-4c3d-bde1-29919f34dfa9', 
            synopsis: "In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule " +
                      "over all non - magical beings, Albus Dumbledore enlists his former student Newt Scamander, " +
                      "who agrees to help, unaware of the dangers that lie ahead.Lines are drawn as love and" +
                      " loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world."
        },
        { 
            title: "Venom", 
            imageSrc: "https://i.blogs.es/9648bb/05043c25fb559f4f80de86045f8b92352b134ca7/1366_2000.jpg", 
            rating: "6.7", 
            duration: "1h 22m", 
            descriptions: ["Action", "Superheroes", "M12"], 
            cast: [
                { 
                    imgSrc: "~/assets/v1.png", 
                    name: "Tom Hardy", role: "Venom" 
                }, 
                { 
                    imgSrc: "~/assets/v2.png", 
                    name: "Michelle W.", 
                    role: "Anne Weying" 
                },
                { 
                    imgSrc: "~/assets/v3.png",
                    name: "Riz Ahmed", 
                    role: "Carlton Drake" 
                }], 
            bookmark: false, 
            trailer: 'https://firebasestorage.googleapis.com/v0/b/uplabs-nativescript.appspot.com/o/VENOM%20-%20Official%20Trailer%202%20(HD).mp4?alt=media&token=fe1237eb-ea3f-42f7-bffa-832221bb1d45', 
            synopsis: "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant " +
                      "founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body" +
                      " merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark" +
                      " and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so" +
                      " intoxicating." },
        { 
            title: "The Nun", 
            imageSrc: "https://i.ytimg.com/vi/EQRFgGwGeok/maxresdefault.jpg", 
            rating: "7.2", 
            duration: "1h 22m", 
            descriptions: ["Horor", "Thriller", "M16"], 
            cast: [{ imgSrc: "~/assets/n1.png", name: "Taissa Farmiga", role: "Sister Irene" }, { imgSrc: "~/assets/n2.png", name: "Demian Bichir", role: "Father Burke" }], 
            bookmark: false, 
            trailer: 'https://firebasestorage.googleapis.com/v0/b/uplabs-nativescript.appspot.com/o/THE%20NUN%20-%20Official%20Teaser%20Trailer%20%5BHD%5D.mp4?alt=media&token=2577141a-7934-4324-baed-74316105766b', 
            synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun." },
        { 
            title: "Avengers: Infinity War", 
            imageSrc: "https://d3j6lal8h4ou1t.cloudfront.net/uploads/2019/04/avengers-endgame-estreno-comentarios-pelicula.jpg", 
            rating: "8.7", 
            duration: "1h 22m", 
            descriptions: ["Action", "Superheroes", "M16"], 
            cast: [{ imgSrc: "~/assets/a1.png", name: "Robert Downey", role: "Iron Man" }, { imgSrc: "~/assets/a2.png", name: "Scarlet J.", role: "Black Widow" }, { imgSrc: "~/assets/a3.png", name: "Chris Hemsworth", role: "Thor" }], 
            bookmark: false, 
            trailer: 'https://firebasestorage.googleapis.com/v0/b/uplabs-nativescript.appspot.com/o/Marvel%20Studios%20Avengers%20Infinity%20War%20-%20Official%20Trailer.mp4?alt=media&token=1d684440-8e4d-4628-9194-ecfacabc8e97', 
            synopsis: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment." },
        { 
            title: "Peaky Blinders", 
            imageSrc: "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQbiwaVxEXZoxYSv2sxxCLTd2OQnlPysrphIp7S7YXdIzR4aBaKBuiNnmeWvQe3SDMMpgKiINb27WdifsbdzlcjkveYVb4uFLk0ag59B-V8H9kcHlBcSb3r-526ftQ.jpg?r=f89", 
            rating: "9.1", 
            duration: "1h 22m", 
            descriptions: ["Crime", "Action", "M16"], 
            cast: [{ imgSrc: "~/assets/p1.png", name: "Cillian Murphy", role: "Tommy Shelby" }, { imgSrc: "~/assets/p3.png", name: "Adrien Brody", role: "Italian Dude" }], 
            bookmark: false, 
            trailer: 'https://firebasestorage.googleapis.com/v0/b/uplabs-nativescript.appspot.com/o/Peaky%20Blinders%20-%20Season%201%20%20Trailer.mp4?alt=media&token=88608207-391b-435f-aca3-afd197ccd445', 
            synopsis: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby." 
        },
    );

    getPelis(): Array<Peli> {
        return this.items;
    }
}
