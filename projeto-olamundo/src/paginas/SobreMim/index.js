import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Fulano de Tal!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Fulano de Tal"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Nunc ut ex ut mi mattis mattis sed elementum ligula. Sed at libero massa. In sed ligula mattis, dapibus nibh vel, condimentum nisl. Ut vel ex quam. Donec eget ante nisl. Ut varius odio ut imperdiet viverra. Nulla eget nibh nec ex laoreet faucibus nec et magna. Curabitur vel velit suscipit, rhoncus ligula vitae, euismod dolor. Quisque facilisis velit odio, sollicitudin dictum erat viverra eget. Phasellus bibendum aliquet quam nec ultrices.
            </p>
            <p className={styles.paragrafo}>
            Nam congue felis est, in faucibus nisi varius vitae. Nunc sed maximus ex. Fusce nec diam nec augue rhoncus bibendum ac vel risus. Nulla sed mattis velit, eget finibus purus. Nulla vel nulla at turpis facilisis dapibus accumsan at nunc. Cras sodales consectetur massa, sed posuere libero ultricies vel. Aliquam gravida ac neque in venenatis. Vivamus egestas, nunc sit amet porttitor lacinia, ante arcu fringilla dolor, quis pulvinar dolor nulla nec orci. Vestibulum tempor consequat sapien, fermentum tincidunt arcu. Phasellus vel convallis quam.
            </p>
            <p className={styles.paragrafo}>
                Ut pretium nulla a nunc scelerisque finibus. Cras ut ligula in lectus mattis maximus. Mauris suscipit congue augue non ornare. Curabitur dolor elit, sollicitudin nec pellentesque et, porttitor sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla justo dolor, porttitor non tempus vitae, vehicula quis libero. Duis vehicula neque elementum, sollicitudin tortor a, accumsan quam. Nam vitae tellus et ipsum sagittis consectetur. Morbi varius eleifend augue sit amet tincidunt. In mattis quam ut eros scelerisque aliquet. Donec in dui eu augue dapibus finibus. Proin tempor venenatis sollicitudin. Phasellus turpis ex, aliquet vitae orci tempor, tristique mattis dolor.
            </p>
            <p className={styles.paragrafo}>
                Maecenas id tortor ultricies, elementum tortor et, feugiat felis. Etiam ullamcorper turpis felis, maximus rhoncus augue maximus a. Vivamus et justo ut metus luctus lobortis. In nec rhoncus ex, condimentum euismod velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed volutpat rhoncus metus, sed fringilla nibh. Phasellus volutpat fermentum purus, ac vulputate lacus tincidunt a. Cras scelerisque gravida lectus, sed auctor libero molestie ac. Mauris tellus risus, feugiat in vulputate in, ullamcorper in erat. Cras eget convallis tellus. Nam interdum nunc sit amet velit imperdiet iaculis.
            </p>
            <p className={styles.paragrafo}>
                Nunc interdum lorem a elementum ultricies. Sed faucibus leo magna, at dictum tortor blandit vitae. Cras non nulla nisi. Sed in feugiat tellus, ac fringilla tellus. In hac habitasse platea dictumst. Suspendisse potenti. Aliquam erat volutpat. Aliquam felis lorem, congue vel porta sed, mattis et velit. Mauris accumsan augue auctor, ultrices sem fermentum, imperdiet nibh. In porttitor metus vel semper molestie. Ut tristique porttitor est.
            </p>

        </PostModelo>
    )
}