import CompilerOptions from '~/interfaces/CompilerOptions';
import Compiler from '~/Compiler';

/**
 * Compile template.

 * @param {CompilerOptions} options Compilation options.
 * @return {(filePath: string, data?: object) => Promise<string>} Render function.
 * @throws {TypeError} Throws an exception if the viewsDir option is unset.
 * @throws {TypeError} Throws an exception if the directory specified by the viewsDir option is not found.
 * @throws {TypeError} Throws an exception if the directory specified by the partialsDir option is not found.
 * @throws {TypeError} Throws an exception if the directory specified by the layoutsDir option is not found.
 * @throws {TypeError} Throws an exception if the file specified by the defaultLayout option is not found.
 */
export default (options: CompilerOptions): ((filePath: string, data?: object) => Promise<string>) => {
  // Create compiler instance.
  const compiler = new Compiler(options);

  // Returns the render function.
  return compiler.render.bind(compiler);
}