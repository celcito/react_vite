import  * as jose from 'jose';

/**
 * Verifica se um token JWT expirou.
 *
 * @param {string} token - O token JWT a ser verificado.
 * @returns {boolean} Retorna verdadeiro se o token expirou, falso caso contrário.
 */

export const verifyTokenExpired =(token:string)=>{
    try {
        const decoded = jose?.decodeJwt(token);
        if (!decoded) {
          throw new Error('Token malformado ou inválido');
        }
        const exp = decoded.exp || 0;
        const currentTime = Date.now() / 1000;
        return (exp < currentTime);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        console.error('Erro ao decodificar o token:', error.message);
      }

}