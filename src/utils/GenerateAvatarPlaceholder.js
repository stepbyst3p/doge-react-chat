export default function generateAvatarPlaceholder(name) {
    try {
        return name
            .split(' ')
            .map(word => word[0]
                .toUpperCase())
            .slice(0, 2)
            .join('')
    } catch (error) {
        console.error('Error parsing user name:' + error);
        return error
    }
}

