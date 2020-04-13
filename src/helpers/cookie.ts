// 
const cookie = {
  read(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
    // match[0] is whole match value, match[1] is (^|;\\s*), match[2] is name, match[3] is value 
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
