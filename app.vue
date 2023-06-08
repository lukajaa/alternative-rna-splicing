<template>
  <div class="background">
    <div class="mx-auto min-h-screen h-full p-10 w-full pb-5">
      <p class="text-5xl text-center big-title">Alternative RNA Splicing</p>
      <p class="text-3xl text-center yellow-text mt-5">Overview</p>
      <div class="flex flex-row mt-10">
        <div class="flex flex-col">
          <img src="~/assets/images/AS_Overview.png" />
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-center caption">
            Alternative RNA splicing treats different segments of mRNA as exons depending on the snRNA on the spliceosome. This allows for multiple proteins to be coded from the same mRNA strand
          </p>
        </div>
      </div>
      <p class="text-xl text-center yellow-text mt-5">Spliceosome</p>
      <p class="caption mt-5">
        The spliceosome's six complexes recognize the splice sites of the exon and cut and bind them together.
      </p>
      <div class="flex flex-row caption mt-10">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="rounded-full bg-indigo-700 w-28 h-28 flex justify-center items-center">
              U1
            </div>
            <div class="rounded-full bg-indigo-600 w-28 h-28 flex justify-center items-center -translate-x-[3rem]">
              U2
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center mx-5">
          <p class="text-center caption">
            The U1 and U2 snRNPs identify the edges of the exon by recognizing the 5' and 3' splice sites with their snRNA. They do this by binding to the respective GU (5') or AG (3') sequences present on the edges of 99% of exons.
          </p>
        </div>
      </div>
      <div class="flex flex-row caption mt-10">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="rounded-full bg-indigo-500 w-28 h-28 flex justify-center items-center">
              U3
            </div>
            <div class="rounded-full bg-indigo-400 w-28 h-28 flex justify-center items-center -translate-x-[3rem]">
              U4
            </div>
            <div class="rounded-full bg-indigo-300 w-28 h-28 flex justify-center items-center -translate-x-[6rem]">
              U5
            </div>
            <div class="rounded-full bg-indigo-200 w-28 h-28 flex justify-center items-center -translate-x-[9rem]">
              U6
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center -translate-x-[6rem]">
          <p class="text-center caption">
            The remaining U3, U4, U5, and U6 snRNPs are used to cut out the intron and connect the exons together.
          </p>
        </div>
      </div>

      <div class="flex flex-row justify-between px-30 text-center mt-5">
        <div class="flex flex-col justify-center w-5/12">
          <p class="yellow-text text-2xl">snRNA</p>
          <p class="caption text-md">
            snRNA is RNA that makes up part of the spliceosome. Its function as an RNA is imperative to the splicing process because it can recognize the splice sites by matching nucleotide sequences.
          </p>
        </div>
        <div class="flex flex-col justify-center w-2/12">
          <p class="yellow-text text-xl">vs</p>
        </div>
        <div class="flex flex-col justify-center w-5/12">
          <p class="yellow-text text-2xl">snRNP</p>
          <p class="caption text-md">
            snRNP is a combination of snRNA and functional protein groups. The snRNP recognizes the splice sites and cuts the mRNA strand. A total of 6 snRNPs are used in the splicing process.
          </p>
        </div>
      </div>

      <p class="text-3xl text-center yellow-text mt-5">Examples</p>

      <p class="text-xl text-center yellow-text mt-5">Fas Receptor</p>
      <div class="flex flex-col items-center">
          <div class="flex flex-col justify-center">
            <p class="text-center caption">
              The Fas receptor promotes apoptosis -- the programmatic killing of cells -- for cancer cells.
              When Exon 6 is excluded, the Fas receptor becomes soluble and dissolves, making it unable to promote apoptosis.
            </p>
          </div>
        <p class="text-center mt-5 caption"><span class="font-black text-green-400">TIA-1</span> and <span class="font-black text-red-500">PTB</span> are two antagonistic proteins that affect how the snRNP binds to the exon.</p>

        <div class="flex flex-row">
          <div class="flex flex-col">
            <img src="~/assets/images/FAS.png" width="800" />
          </div>
          <div class="flex flex-col justify-center mx-5">
            <p class="text-center caption">
              Without either TIA-1 or PTB, the U1 complex of the spliceosome has a weak connection to the 5' side of the exon. 
              This results in the exon being skipped and the soluble Fas receptor being produced.
            </p>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <img src="~/assets/images/FAS_2.png" width="1200" />
          </div>
          <div class="flex flex-col justify-center mx-5">
            <p class="text-center caption">
              When TIA-1 is present, the U1 complex of the spliceosome has a strong connection to the 5' side of the exon. Additionally, the 5' donor site assists the U2AF in binding to the 3' side of the exon.
              This results in the exon being included and the membrane-bound Fas receptor being produced.
            </p>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <img src="~/assets/images/FAS_3.png" width="800" />
          </div>
          <div class="flex flex-col justify-center mx-5">
            <p class="text-center caption">
              When both TIA-1 and PTB are present, the PTB inhibits the 5' donor complex. 
              This results in the U2AF being unable to bind to the 3' side of the exon, and the exon being skipped.
            </p>
          </div>
        </div>
      </div>

      <p class="text-xl text-center yellow-text mt-5 italic"> drosophila dsx </p>
        <div class="flex flex-row">
          <div class="flex flex-col justify-center">
            <img src="~/assets/images/DSX.png" class="float-left max-w-sm mr-10" width=""/>
          </div>
          <div class="flex flex-col">
            <pre class="caption">
Why does exon 4 get cut off for male flies?
    - No splicing activator
    - during splicing, the polypyrimidine tract acts as a signal for the splicesome to recognize it so that it can cut from the correct SS
    - Exon 4 has a weak polypyrimidine tract (meaning it doesn't match the nucleotide sequence on the SS well) → the U2AF doesn't bind well 
        - U2AF → protein that recognizes specific sequence in the polypyrimidine tract + recruits and accurately positions snRNP to the correct site 
    - When U2AF doesn't bind well → 3' SS on that exon is not cut
            </pre>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col justify-center">
            <img src="~/assets/images/DSX_1.png" class="float-left max-w-sm mr-10" />
          </div>
          <div class="flex flex-col">
          <pre class="caption">
Why is exon 4 included for female flies?
    - Females produce splicing activator → Tra
        - If Tra is present in exon 4, it binds to Tra2 with another SR protein (certain fam of protein)
            - Protein Tra2 is produced in both sexes + binds to exonic splicing enhancers (ESE = sequences of nucleotides in pre-mRNA that enhance the efficiency of splicing) in exon
            - forms a complex that helps U2AF bind to weak polypyrimidine tract ⇒ splicing is normal
          </pre>
          </div>
          </div>
      <div class="text-center caption p-5">
        Created by <a href="https://www.lucaskchang.com" target="_blank">Lucas Chang</a> and Nuri Tam. Made with <a href="https://github.com/lukajaa/alternative-rna-splicing" target="_blank">Nuxt.js and Tailwind CSS</a>.
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Ubuntu:wght@500&display=swap');

.caption {
  font-family: 'Roboto Slab', serif;
}
.background {
  background-color: #59C1C9;
}

.big-title {
  font-family: 'Ubuntu', sans-serif;
  color: #23666B;
}

.yellow-text {
  color: #F8CF46;
  font-family: 'Ubuntu', sans-serif;
}

a {
  color: #23666B;
}

pre {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>