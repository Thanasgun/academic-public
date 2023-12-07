export default class MockUtils {

    static randomDateTillLastMonth(monthRange: number = 1): Date {
        const currentDate = new Date();
        const start = new Date(currentDate.getFullYear(), currentDate.getMonth() - monthRange, currentDate.getDate());
        const end = currentDate;
        
        const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
        return new Date(randomTime);
      }
    
      static generateLoremIpsumSentences(numSentences: number = 1): string {
        const loremIpsumWords: string[] = [
          'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
          'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
          'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
          'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
          'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit',
          'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
          'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
          'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est',
          'laborum'
        ];
      
        let loremIpsumText = '';
        for (let i = 0; i < numSentences; i++) {
          const sentenceLength = Math.floor(Math.random() * 8) + 4; // Random sentence length between 4 to 12 words
          let sentence = '';
      
          for (let j = 0; j < sentenceLength; j++) {
            const randomWordIndex = Math.floor(Math.random() * loremIpsumWords.length);
            const word = loremIpsumWords[randomWordIndex];
            sentence += word + ' ';
          }
      
          sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '. ';
          loremIpsumText += sentence;
        }
      
        return loremIpsumText.trim();
      }
    
      static Random(min: number = 0, max: number = 1): number {
        if (min >= max) {
          throw new Error('Min value should be less than Max value');
        }
      
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      static generateRandomName(): string {
        const prefixes: string[] = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];
        const firstNames: string[] = ['John', 'Emily', 'David', 'Sophia', 'Michael', 'Emma', 'Daniel', 'Olivia', 'James', 'Ava', 'William', 'Mia', 'Alexander', 'Charlotte', 'Benjamin', 'Abigail', 'Ethan', 'Harper', 'Lucas', 'Evelyn'];
        const middleNames: string[] = ['Robert', 'Elizabeth', 'Joseph', 'Grace', 'Andrew', 'Victoria', 'Thomas', 'Chloe', 'Jacob', 'Lily', 'Gabriel', 'Madison', 'Nathaniel', 'Zoe', 'Elijah', 'Hannah'];
        const lastNames: string[] = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris'];
      
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        const hasMiddleName = Math.random() > 0.5; // Randomly decide whether to include a middle name
      
        let fullName = '';
        if (hasMiddleName) {
          fullName = `${prefix} ${firstName} ${middleName} ${lastName}`;
        } else {
          fullName = `${prefix} ${firstName} ${lastName}`;
        }
      
        return fullName;
      }

      static generateRandomPosition(): string {
        const titles: string[] = [
          'Professor of Mathematics',
          'Assistant Professor of Biology',
          'Associate Professor of Computer Science',
          'Lecturer in Chemistry',
          'Teacher of Physics',
          'Instructor in Literature',
          'School Counselor',
          'Librarian',
          'Dean of Arts and Humanities',
          'Principal of Science Department',
          'Curriculum Specialist in Education',
          'Education Consultant in Technology Integration',
          'Education Administrator in Student Affairs',
          'Admissions Counselor',
          'Special Education Teacher',
          'Career Counselor',
          'Research Assistant in Psychology',
          'Graduate Assistant in Sociology',
          'Teaching Assistant in History'
          // Add more detailed educational positions with institute names as needed
        ];
      
        return titles[Math.floor(Math.random() * titles.length)];
      }

      static generateRandomServiceUnitName(): string {
        const serviceUnitNames: string[] = [
          'Information Technology Department',
          'Human Resources Division',
          'Marketing and Communications Team',
          'Research and Development Unit',
          'Customer Support Center',
          'Finance and Accounting Office',
          'Operations and Logistics Department',
          'Quality Assurance Team',
          'Product Management Division',
          'Training and Development Center'
          // Add more service unit names as needed
        ];
      
        const adjectives: string[] = [
          'Academic',
          'National',
          'International',
          'Global',
          'Advanced',
          'Innovative',
          'Technical',
          'Educational',
          'Creative',
          'Research',
          'Scholastic',
          'Scholarly',
          'Progressive',
          'Elite',
          'Premier'
        ];
      
        const nouns: string[] = [
          'Institute',
          'University',
          'College',
          'School',
          'Academy',
          'Center',
          'Foundation',
          'Laboratory',
          'Hub',
          'Innovation Center',
          'Learning Center',
          'Academic Center',
          'Institute of Technology'
        ];
      
        const selectedServiceUnit = serviceUnitNames[Math.floor(Math.random() * serviceUnitNames.length)];
        const selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const selectedNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomInstitute = `${selectedAdjective} ${selectedNoun}`;
      
        return `${selectedServiceUnit} of ${randomInstitute}`;
      }

}